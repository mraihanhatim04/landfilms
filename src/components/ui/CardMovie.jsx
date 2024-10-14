import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "/src/tmdbAPI";

const CardMovie = () => {
  const [listMovie, setListMovie] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    getNowPlayingMovies().then((result) => {
      setListMovie(result);
    });
  }, []);

  // Filter movies based on searchKeyword
  const filteredMovies = listMovie.filter((movie) =>
    movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto lg:px-24 justify-center items-center bg-white p-2 rounded-lg">
        <Input
          className="font-bold p-8"
          type="text"
          variant="underlined"
          label="Search your favourite movie"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Type a movie title..."
        />
      </div>
      <div className="container flex flex-wrap mx-auto justify-center gap-4 mt-2 mb-20">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, i) => (
            <Card key={i} className="py-4 max-w-[350px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{movie.title}</h4>
                <p className="text-tiny uppercase font-bold">
                  {movie.release_date}
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={`Poster of ${movie.title}`}
                  className="object-cover rounded-xl"
                  src={`${import.meta.env.VITE_APP_BASE_IMAGE_URL}/${
                    movie.poster_path
                  }`}
                />
              </CardBody>
              <CardFooter className="justify-between">
                <div className="flex flex-col">
                  <p>Rating</p>
                  <p className="px-2 text-tiny font-bold">
                    {movie.vote_average}
                  </p>
                </div>
                <Button className="bg-sky-950 text-white font-semibold">
                  Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center text-red-500 font-bold mt-8">
            Film tidak ditemukan
          </p>
        )}
      </div>
    </>
  );
};

export default CardMovie;
