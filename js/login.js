$(document).ready(function(){
 $(".vhod").click(function(){
  login=$('[name=login]').val();
  password=$('[name=password]').val();
  $.post(
  "http://inh.kz/login",
  {
    login: login,
    password: password
  },
  onAjaxSuccess
);
function onAjaxSuccess(data)
{
  log1=JSON.parse(data);
  if (log1['user']!=undefined) {
     localStorage.setItem("user", log1['user']);
     localStorage.setItem("id", log1['id']);
     localStorage.setItem("status", log1['status']);
     status=localStorage.getItem('user');
     if (status == 1) {
      location.href="index1.html";
    }else{
      location.href="index2.html";
    }
  }else{
    sweetAlert( "Ошибка", log1['errors'] ,"error");
  }
}
})
});