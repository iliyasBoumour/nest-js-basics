import { RoleEnum } from './../users/entities/role.entity';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const Role = (...roles: RoleEnum[]) => SetMetadata(ROLES_KEY, roles);
