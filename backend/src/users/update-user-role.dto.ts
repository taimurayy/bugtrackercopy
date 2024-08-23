// src/users/update-user-role.dto.ts
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUserRoleDto {
    @IsInt()
    @IsNotEmpty()
    roleId: number;

    constructor(roleId: number) {
        this.roleId = roleId;
    }
}
