# **Product Catalog App - Technical Explanation**
## React 18 
## **Features Implemented**
✅ **Fetch & Display Products**  
✅ **Category Filtering** (Dropdown)  
✅ **Favorite Toggle** (Local State)  
✅ **Responsive Design** (Mobile & Desktop)  
✅ **Error Handling**  
✅ **TypeScript for Type Safety**  

---

## **Key Components & Structure**
### **1. `useProducts` Custom Hook**
- **What it does**:  
  - Fetches products & categories from the API  
  - Manage `error` states  
  - Returns clean data for the UI  

- **Why it's useful**:  
  - Separates API logic from UI  
  - Reusable across components  
  - Handles errors gracefully  

### **2. `ProductCard` Component**
- **What it does**:  
  - Displays product image, title, price, and category  
  - Allows favoriting/unfavoriting products  

- **Props it accepts**:  
  - `product` (object with product details)  
  - `isFavorite` (boolean)  
  - `onToggleFavorite` (function to toggle favorite state)  


- **Key Features**:  
  - **Filtering**: Dropdown to filter by category (`all`, `electronics`, `jewelery`, etc.)  
  - **Favorites**: Click the heart icon to save favorites (stored in local state)  
  - **Responsive Grid**: Adapts to different screen sizes  

---

## **How the App Works**
1. **On Load**:
   - Fetches products & categories from the API  

2. **User Interactions**:
   - **Filtering**:  
     - Select a category from the dropdown  
     - The grid updates to show only matching products  
   - **Favorites**:  
     - Favorites persist while using the app (but reset on refresh)  

3. **Responsive Behavior**:
   - **Desktop**: 4 columns  
   - **Tablet**: 3 columns  
   - **Mobile**: 2 columns  

---

## **Technical Choices**
- **TypeScript**: Ensures type safety
- **Tailwind CSS**: Keeps styling simple & responsive  
- **Custom Hook (`useProducts`)**: Improves code organization 
- **Axios**: For API requests 


I want to be transparent with you 
