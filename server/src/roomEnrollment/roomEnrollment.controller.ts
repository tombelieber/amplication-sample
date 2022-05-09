import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomEnrollmentService } from "./roomEnrollment.service";
import { RoomEnrollmentControllerBase } from "./base/roomEnrollment.controller.base";

@swagger.ApiTags("roomEnrollments")
@common.Controller("roomEnrollments")
export class RoomEnrollmentController extends RoomEnrollmentControllerBase {
  constructor(
    protected readonly service: RoomEnrollmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
