// Helper function to convert a string to title case
function toTitleCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      throw new Error("Input must be a non-empty string");
    }
  
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Helper function to truncate a string to a specified length
  function truncateString(str, maxLength) {
    if (typeof str !== 'string' || str.length === 0 || typeof maxLength !== 'number' || maxLength <= 0) {
      throw new Error("Invalid inputs. Input must be a non-empty string, and maxLength must be a positive number");
    }
  
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }
  
  // Demo using the helper functions
  try {
    const inputText = "hello, world! this is a demonstration of string manipulation.";
    
    const titleCasedText = toTitleCase(inputText);
    console.log("Title Cased Text:", titleCasedText);
  
    const truncatedText = truncateString(inputText, 30);
    console.log("Truncated Text:", truncatedText);
  } catch (error) {
    console.error("Error:", error.message);
  }
  