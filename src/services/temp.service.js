// Read 외 로직 처리
// import { BaseError } from "../../config/error.js";
// import { status } from "../../config/response.status.js";

export function CheckFlag(flag) {
  if (flag == 1) throw new Error("Flag is 1!!"); // 에러 발생시키기!
  else {
    return flagResponseDTO(flag);
  }
}
