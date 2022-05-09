import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PaymentGatewayResolverBase } from "./base/paymentGateway.resolver.base";
import { PaymentGateway } from "./base/PaymentGateway";
import { PaymentGatewayService } from "./paymentGateway.service";

@graphql.Resolver(() => PaymentGateway)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PaymentGatewayResolver extends PaymentGatewayResolverBase {
  constructor(
    protected readonly service: PaymentGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
