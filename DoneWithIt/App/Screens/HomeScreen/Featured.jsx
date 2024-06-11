import { View, Text } from 'react-native'
import React from 'react'

export default function Featured() {
    const [featured, setFeatured] = useState([]);
  
    useEffect(() => {
      getFeatured();
    }, []);
  
    const getFeatured = async () => {
      try {
        const response = await fetch("http://192.168.2.247:3000/getCategory");
        const data = await response.json();
        console.log("Response of categories", data);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  return (
    <View>
      <Text>Featured</Text>
    </View>
  )
}