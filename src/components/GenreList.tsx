import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import useGenres from "../hooks/useData";
import {
  HStack,
  List,
  ListItem,
  Button,
  Spinner,
  Image,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return(
  <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre: Genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  </>
)
};

export default GenreList;
