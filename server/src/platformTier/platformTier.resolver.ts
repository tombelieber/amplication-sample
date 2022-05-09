import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PlatformTierResolverBase } from "./base/platformTier.resolver.base";
import { PlatformTier } from "./base/PlatformTier";
import { PlatformTierService } from "./platformTier.service";

@graphql.Resolver(() => PlatformTier)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlatformTierResolver extends PlatformTierResolverBase {
  constructor(
    protected readonly service: PlatformTierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
