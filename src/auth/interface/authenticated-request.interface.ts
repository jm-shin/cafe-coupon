import { Request } from '@nestjs/common';
import { User } from './user.interface';

export interface AuthenticatedRequest extends Request {
  readonly user: User;
}
