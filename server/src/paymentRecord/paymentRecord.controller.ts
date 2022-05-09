import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentRecordService } from "./paymentRecord.service";
import { PaymentRecordControllerBase } from "./base/paymentRecord.controller.base";

@swagger.ApiTags("paymentRecords")
@common.Controller("paymentRecords")
export class PaymentRecordController extends PaymentRecordControllerBase {
  constructor(
    protected readonly service: PaymentRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
