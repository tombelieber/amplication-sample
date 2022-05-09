import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PaymentGatewayServiceBase } from "./base/paymentGateway.service.base";

@Injectable()
export class PaymentGatewayService extends PaymentGatewayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
