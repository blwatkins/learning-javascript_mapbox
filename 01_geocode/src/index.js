#!/usr/bin/env node

require('dotenv').config();
const mapbox = require('@mapbox/mapbox-sdk');
const mapboxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

class MapBoxGeocodingClient {
    #geocodingService;
    
    constructor() {
        const mapboxClient = mapbox({ accessToken: process.env.MAPBOX_API_TOKEN });
        this.#geocodingService = mapboxGeocoding(mapboxClient);
    }

    async geocodeAddress(address) {

    }
}

async function main() {
    throw new Error('Not implemented');
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});;
