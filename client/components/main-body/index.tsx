import { FC, useEffect, useState } from 'react';
import { Room, MainBodyProps } from 'lib/@types/common';
import styles from './MainBody.module.scss';
import Card from 'components/card';
import axios from 'axios';
import { API_DOMAIN } from 'lib/general-config';
import { ENDPOINTS } from 'lib/api';

const MainBody: FC<MainBodyProps> = () => {
    const [items, setItems] = useState<Room[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios
            .get(`${API_DOMAIN}${ENDPOINTS.GET.rooms}`)
            .then((response) => {
                setItems(response?.data?.data?.items);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }, []);

    const handleDelete = (roomId: string | undefined) => {
        axios
            .delete(`${API_DOMAIN}${ENDPOINTS.DELETE.deleteRoom(roomId)}`)
            .then(() => {
                setItems((prevItems) => prevItems.filter((item) => item._id !== roomId));
            })
            .catch((error) => {
                console.error('Error deleting room:', error);
            });
    };

    const handleStatus = (roomId: string | undefined) => {
        axios
            .patch(`${API_DOMAIN}${ENDPOINTS.PATCH.updateStatus(roomId)}`)
            .then(() => {
                // Update the state variable to trigger re-render
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item._id === roomId ? { ...item, isBooked: !item.isBooked } : item
                    )
                );
            })
            .catch((error) => {
                console.error('Error updating room status:', error);
            });
    };

    return (
        <div className={styles.wrapper}>
            {items.map((item) => (
                <Card
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    desks={item.desks}
                    imageURL={item.imageURL}
                    isBooked={item.isBooked}
                    onDelete={() => handleDelete(item._id)}
                    onStatusChange={() => handleStatus(item._id)}
                />
            ))}
        </div>
    );
};

export default MainBody;
