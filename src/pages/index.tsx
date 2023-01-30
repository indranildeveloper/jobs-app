import { Button } from "@/components/button";
import { InputField } from "@/components/form";
import { Link } from "@/components/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="name" />
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default HomePage;
