import { Component, OnInit } from "@angular/core"
import { StoreSService } from "../../services/store/store-s.service"
import { MsgInterFace } from "../../store/actions/handler-msg.action"

@Component({
  selector: "app-handler-msg",
  templateUrl: "./handler-msg.component.html",
  styleUrls: ["./handler-msg.component.css"]
})
export class HandlerMsgComponent implements OnInit {
  message: MsgInterFace = {
    class: "",
    message: "",
    show: false,
    status: 0
  }
  constructor(private msg_handler: StoreSService) {}

  ngOnInit() {
    this.msg_handler.getHandlerMsg().subscribe(
      data => {
        this.message = {
          message: data.message
            ? data.message
            : " Maybe server is turn off.\n You can try again.",
          class: data.class,
          show: data.show,
          status: data.status
        }
      },
      e => console.log("Error from HandlerMsgComponent : ", e)
    )
  }
}
