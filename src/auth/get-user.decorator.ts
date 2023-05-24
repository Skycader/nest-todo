import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, req): User => {
    console.log('req');
    console.log(req);
    console.log(data);
    return req.user;
  },
);
