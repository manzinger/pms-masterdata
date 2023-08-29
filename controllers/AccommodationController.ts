import { DynamoDBClient, PutCommand } from "@aws-sdk/client-dynamodb";

class AccommodationController {
  async storeAccommodationData(data) {
    const dynamoDBClient = new DynamoDBClient();
    const tableName = "AccommodationData";
    
    const accommodationId = data.accommodationId;
    const amenities = data.amenities;
    const images = data.images;
    
    const newItem = {
      accommodationId: { S: accommodationId },
      amenities: { L: amenities.map((amenity) => ({ S: amenity })) },
      images: { L: images.map((image) => ({ S: image })) },
    };
    
    const putCommand = new PutCommand({
      TableName: tableName,
      Item: newItem,
    });
    
    try {
      await dynamoDBClient.send(putCommand);
      console.log("Accommodation data stored successfully");
    } catch (error) {
      console.error("Error storing accommodation data:", error);
    }
  }
}

export default AccommodationController;