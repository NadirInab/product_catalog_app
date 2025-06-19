# **Product Catalog App - Technical Explanation**

This is a **React + TypeScript** product catalog app that fetches data from the [FakeStoreAPI](https://fakestoreapi.com) and displays products in a responsive grid.  

## **Features Implemented**
✅ **Fetch & Display Products**  
✅ **Category Filtering** (Dropdown)  
✅ **Favorite Toggle** (Local State)  
✅ **Responsive Design** (Mobile & Desktop)  
✅ **Loading & Error States**  
✅ **TypeScript for Type Safety**  

---

## **Key Components & Structure**
### **1. `useProducts` Custom Hook**
- **What it does**:  
  - Fetches products & categories from the API  
  - Manages `loading` and `error` states  
  - Returns clean data for the UI  

- **Why it's useful**:  
  - Separates API logic from UI  
  - Reusable across components  
  - Handles errors gracefully  

### **2. `ProductCard` Component**
- **What it does**:  
  - Displays product image, title, price, and category  
  - Allows favoriting/unfavoriting products (❤️)  

- **Props it accepts**:  
  - `product` (object with product details)  
  - `isFavorite` (boolean)  
  - `onToggleFavorite` (function to toggle favorite state)  

### **3. `App` Component (Main Logic)**
- **What it does**:  
  - Uses `useProducts` to fetch data  
  - Manages **category filtering** (`selectedCategory` state)  
  - Tracks **favorites** (`favorites` state)  
  - Renders loading/error/product grid  

- **Key Features**:  
  - **Filtering**: Dropdown to filter by category (`all`, `electronics`, `jewelery`, etc.)  
  - **Favorites**: Click the heart icon to save favorites (stored in local state)  
  - **Responsive Grid**: Adapts to different screen sizes  

---

## **How the App Works**
1. **On Load**:
   - Fetches products & categories from the API  
   - Shows a loading spinner while waiting  
   - If an error occurs, displays an error message  

2. **User Interactions**:
   - **Filtering**:  
     - Select a category from the dropdown  
     - The grid updates to show only matching products  
   - **Favorites**:  
     - Click the heart icon (🤍 → ❤️)  
     - Favorites persist while using the app (but reset on refresh)  

3. **Responsive Behavior**:
   - **Desktop**: 4 columns  
   - **Tablet**: 3 columns  
   - **Mobile**: 2 columns  

---

## **Technical Choices**
- **TypeScript**: Ensures type safety & better developer experience  
- **Tailwind CSS**: Keeps styling simple & responsive  
- **Custom Hook (`useProducts`)**: Improves code organization & reusability  
- **Axios**: For clean API requests (instead of `fetch`)  

---

## **Possible Improvements**
🔹 **Add Search Functionality** (Filter by product name)  
🔹 **Persist Favorites** (Use `localStorage` or a state manager)  
🔹 **Pagination/Lazy Loading** (For better performance with many products)  
🔹 **Unit Tests** (For reliability)  

---

## **Final Notes**
This app demonstrates:
✔ **Clean component structure**  
✔ **Efficient data fetching**  
✔ **User-friendly UI**  
✔ **Responsive design**  

It follows **React best practices** while keeping the code simple and maintainable. 🚀
