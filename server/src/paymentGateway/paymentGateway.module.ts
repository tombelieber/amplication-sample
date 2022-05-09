import { Module } from "@nestjs/common";
import { PaymentGatewayModuleBase } from "./base/paymentGateway.module.base";
import { PaymentGatewayService } from "./paymentGateway.service";
import { PaymentGatewayController } from "./paymentGateway.controller";
import { PaymentGatewayResolver } from "./paymentGateway.resolver";

@Module({
  imports: [PaymentGatewayModuleBase],
  controllers: [PaymentGatewayController],
  providers: [PaymentGatewayService, PaymentGatewayResolver],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
