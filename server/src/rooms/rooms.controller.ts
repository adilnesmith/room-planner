
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { RoomService } from './rooms.service';
import { Room } from './rooms.model';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }
  @Post()
  async create(@Body() room: Room): Promise<any> {
    try {
      const createdRoom = await this.roomService.create(room);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Room created successfully',
        data: createdRoom,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to create room',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get()
  async findAll(
    @Query('sort') sort: string,
    @Query('order') order: string,
    @Query('page') page: number,
    @Query('limit') limit: number
  ): Promise<any> {
    try {
      const rooms = await this.roomService.findAll(sort, order, page, limit);
      return {
        statusCode: HttpStatus.OK,
        message: 'Rooms retrieved successfully',
        data: rooms,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to retrieve rooms',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    try {
      const room = await this.roomService.findOne(id);
      if (room) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Room retrieved successfully',
          data: room,
        };
      } else {
        throw new NotFoundException('Room not found');
      }
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to retrieve room',
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    try {
      await this.roomService.delete(id);
    } catch (error) {
      throw new NotFoundException('Room not found');
    }
  }
}
