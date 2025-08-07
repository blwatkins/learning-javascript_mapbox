# geocode

Geocoding is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") into geographic coordinates (like latitude 37.422 and longitude -122.084).

Using the Mapbox Geocoding API, you can perform forward and reverse geocoding to get location data based on addresses or coordinates.

## Project Configuration

To run this example, you will need the following:
- An internet connection.
- An installation of [Node.js](https://nodejs.org/).
- A code editor.
- A [Mapbox](https://www.mapbox.com/) account.
- An API access token from Mapbox. You can create a token in your Mapbox account dashboard.

You can learn more about Mapbox Access Tokens in the [Mapbox documentation](https://docs.mapbox.com/help/dive-deeper/access-tokens/).

## Project Dependencies

[@mapbox/mapbox-sdk](https://github.com/mapbox/mapbox-sdk-js)

[dotenv](https://github.com/motdotla/dotenv)

## Installation and Setup

After cloning this repository, navigate to the `01_geocode` directory and run:

```bash
npm install
```

This will install the necessary dependencies, including the Mapbox SDK for JavaScript and dotenv for environment variable management.

In the `01_geocode` directory, create a `.env` file and add your Mapbox access token:

```plaintext
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
```

## Execution

To run the geocoding example, execute the following command in the `01_geocode` directory:

```bash
node src/index.js
```

## Resources and References

[Mapbox](https://www.mapbox.com/)

[Mapbox Docs: Geocoding API](https://docs.mapbox.com/api/search/geocoding/)

[Mapbox Docs: Address Geocoding Format Guide](https://docs.mapbox.com/help/troubleshooting/address-geocoding-format-guide/)

----

Copyright (C) 2025 brittni and the polar bear LLC.
