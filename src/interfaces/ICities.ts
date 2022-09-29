interface Cities {
  identifier: string;
  name: string;
  normalizedName: string;
  containedInPlace: {
    identifier: string;
    name: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
}

export default Cities;
