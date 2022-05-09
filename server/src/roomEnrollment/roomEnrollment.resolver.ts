import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RoomEnrollmentResolverBase } from "./base/roomEnrollment.resolver.base";
import { RoomEnrollment } from "./base/RoomEnrollment";
import { RoomEnrollmentService } from "./roomEnrollment.service";

@graphql.Resolver(() => RoomEnrollment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RoomEnrollmentResolver extends RoomEnrollmentResolverBase {
  constructor(
    protected readonly service: RoomEnrollmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
