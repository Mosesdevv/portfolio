import Button from "../components/Button";

const SendEmail = () => {
  function sendEmai() {
    window.open(
      "abayomimoses11@gmail.com.com?subject=SendMail&body=Description"
    );
  }
  return (
    <Button className="sendemail-btn" onClick={sendEmai}>
      Send Email
    </Button>
  );
};

export default SendEmail;
