import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Divider,
} from "@nextui-org/react";

const DetailMovie = ({ movie, onBack }) => {
  return (
    <div className="container mx-auto lg:px-24 justify-center items-center bg-white p-4 rounded-lg mb-10">
      <Button
        onClick={onBack}
        className="bg-gradient-to-r from-sky-800 via-sky-700 to-sky-500  text-white mb-4"
      >
        Back
      </Button>
      <Card className="max-w-[400px] mx-auto">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <p className="text-tiny uppercase font-bold mb-2">
            {movie.release_date}
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="h-[380px]">
          <Image
            alt={`Poster of ${movie.title}`}
            src={`${import.meta.env.VITE_APP_BASE_IMAGE_URL}/${
              movie.poster_path
            }`}
          />
          <div className="ml-1">
            <p className="font-bold mt-2">DESCRIPTION</p>
            <p>{movie.overview}</p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="justify-between">
          <p>Rating</p>
          <p className="px-2 text-tiny font-bold">{movie.vote_average}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailMovie;
