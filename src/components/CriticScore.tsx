import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge colorScheme={color} fontSize="14px " padding={2} borderRadius="4px">
      {" "}
      {score}
    </Badge>
  );
};

export default CriticScore;
