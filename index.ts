import AccommodationController from "./controllers/AccommodationController";

const accommodationController = new AccommodationController();

// Example usage
const data = {
  accommodationId: "123",
  amenities: ["Wifi", "Pool"],
  images: ["image1.jpg", "image2.jpg"],
};

accommodationController.storeAccommodationData(data);