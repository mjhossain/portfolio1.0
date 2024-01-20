
// CSS in Body.css

const currentDate = new Date();
const year = currentDate.getFullYear();

export default function Footer() {
  return (
    <div className="footer flex-row-nowrap">
      <p>Copyright &copy; {year} - Mohammed J Hossain</p>
    </div>
  )
}