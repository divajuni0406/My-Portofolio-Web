import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const notifications = async (result) => {
  if (result !== "") {
    await MySwal.fire({
      position: "top-center",
      icon: "success",
      title: "Email sent successfully",
      showConfirmButton: false,
      timer: 2000,
    });
    return true;
  } else {
    await MySwal.fire({
      position: "top-center",
      icon: "error",
      title: "Failed to sent email",
      showConfirmButton: false,
      timer: 2000,
    });
    return false;
  }
};

const errorNotification = async (text = "", timer = 3000) => {
  await MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: text ? text : "Something Wrong !!!",
    timer: timer,
  });

  return;
};

export { notifications, errorNotification };
