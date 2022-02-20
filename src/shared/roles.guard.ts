import { User } from './../users/entities/user.entity';
import { RoleEnum } from './../users/entities/role.entity';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles: RoleEnum[] = this.reflector.getAllAndOverride<
      RoleEnum[]
    >(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
      return true;
    }
    const user: User = context.switchToHttp().getRequest()?.user;
    return user.roles.some((role) => requiredRoles.includes(role.RoleName));
  }
}
