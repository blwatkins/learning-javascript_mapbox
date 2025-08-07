#!/usr/bin/env node

require('dotenv').config();
const mapbox = require('@mapbox/mapbox-sdk');
const mapboxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

class MapBoxGeocodingClient {
    #geocodingService;
    
    constructor() {
        const mapboxClient = mapbox({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });
        this.#geocodingService = mapboxGeocoding(mapboxClient);
    }

    async geocodeAddress(address) {
        try {
            // https://docs.mapbox.com/api/search/geocoding/
            const response = await this.#geocodingService.forwardGeocode({
                query: address,
                limit: 1,
                countries: ['us']
            }).send();

            if (MapBoxGeocodingClient.isValidGeocodeResponse(response)) {
                const feature = response.body.features[0];
                const [longitude, latitude] = feature.center;

                return {
                    latitude: latitude,
                    longitude: longitude
                };
            } else {
                console.error('No results found for the address:', address);
                return null;
            }
        } catch (error) {
            console.error('Error geocoding address:', error);
            return null;
        }
    }

    static isValidGeocodeResponse(response) {
        return response && response.body && response.body.features && response.body.features.length > 0;
    }
}

async function main() {
    if (!process.env.MAPBOX_ACCESS_TOKEN) {
        console.error('Please set the MAPBOX_ACCESS_TOKEN environment variable.');
        process.exit(1);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});;
