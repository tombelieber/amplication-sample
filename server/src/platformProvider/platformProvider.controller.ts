import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlatformProviderService } from "./platformProvider.service";
import { PlatformProviderControllerBase } from "./base/platformProvider.controller.base";

@swagger.ApiTags("platformProviders")
@common.Controller("platformProviders")
export class PlatformProviderController extends PlatformProviderControllerBase {
  constructor(
    protected readonly service: PlatformProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
