interface Event {
  identifier: number;
  name: string;
  normalizedName: string;
  description: string;
  duration: string;
  genre: string;
  image: {
    contentUrl: string;
  };
  typicalAgeRange: string;
}

export default Event;
