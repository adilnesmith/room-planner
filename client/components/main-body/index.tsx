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
                />
            ))}
        </div>
    );
};

export default MainBody;
