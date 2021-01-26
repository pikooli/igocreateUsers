import api from "./utils/apiRequest";

export function editUser() {
  $("#editUserForm").on("submit", (e) => {
	e.preventDefault();
	let inputArray = $("#editUserForm :input");
    let value = {};
    inputArray.each(function () {
      if ($(this).attr("name")) value[$(this).attr("name")] = $(this).val();
	});
	console.log(value)
    api.put("", value).then((data) => {});
  });
}

export function deleteUser() {
	$("#deleteUser").on("click", (e)=> {
		let userId = $("#editUserForm :input[name='id']").val()
		api.delete(`/users/${userId}`).then((data) => {});
	})
	
  }
  
  
