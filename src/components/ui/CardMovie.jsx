import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Input,
} from "@nextui-org/react";

const CardMovie = () => {
  return (
    <>
      <div className="container mx-auto lg:px-24 justify-center items-center bg-white p-2 rounded-lg">
        <Input
          className="font-bold p-8"
          type="text"
          variant="underlined"
          label="Search your favourite movie"
        />
      </div>
      <div className="container flex flex-wrap mx-auto justify-center gap-4 mt-2 mb-96">
        <Card className="py-4 max-w-[360px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">In Theaters</p>
            <h4 className="font-bold text-large">Men on a mission</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={300}
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </CardBody>
          <CardFooter className="justify-between">
            <p className=" px-2 text-tiny font-bold">Rating</p>
            <Button className="bg-sky-950 text-white font-semibold">
              Details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CardMovie;
