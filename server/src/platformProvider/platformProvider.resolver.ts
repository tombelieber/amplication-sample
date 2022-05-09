import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PlatformProviderResolverBase } from "./base/platformProvider.resolver.base";
import { PlatformProvider } from "./base/PlatformProvider";
import { PlatformProviderService } from "./platformProvider.service";

@graphql.Resolver(() => PlatformProvider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlatformProviderResolver extends PlatformProviderResolverBase {
  constructor(
    protected readonly service: PlatformProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
