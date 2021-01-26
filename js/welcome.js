import api from "./utils/apiRequest";

export function createNewUser() {
  $("#createUserForm").on("submit", (e) => {
    e.preventDefault();
    let inputArray = $("#createUserForm :input");
    let value = {};
    inputArray.each(function () {
      if ($(this).attr("name")) value[$(this).attr("name")] = $(this).val();
    });
    api.post("/", value).then((data) => {});
  });
}
