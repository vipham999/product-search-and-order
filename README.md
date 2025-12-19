## Buymed Screening Test – Product Search & Cart

Ứng dụng React nhỏ mô phỏng màn hình tìm kiếm và đặt hàng sản phẩm dược cho bài **Buymed Frontend Screening Test**.  
Người dùng có thể tìm kiếm thuốc, lọc theo nhóm, thêm vào giỏ và xem tóm tắt đơn hàng.

---

### 🧩 Tính năng chính

- **Tìm kiếm sản phẩm**

  - Ô `Search products...` lọc theo tên thuốc (không phân biệt hoa thường).
  - Kết quả được load giả lập thông qua `fetchFilteredProducts` (delay ~800ms) để mô phỏng gọi API.

- **Lọc theo nhóm thuốc (Category)**

  - Dropdown `CategoryFilter` với các giá trị: `ALL`, `Pain Relief`, `Antibiotic`, `Supplement`, `Allergy`.
  - Có thể kết hợp đồng thời với ô tìm kiếm.

- **Danh sách sản phẩm**

  - Hiển thị tên, nhóm, giá, và badge **Rx** cho thuốc kê đơn (`isPrescription = true`).
  - Nút **Add** cho phép thêm sản phẩm vào giỏ.
  - Khi đang tải, bảng hiển thị skeleton loading.

- **Giỏ hàng (Cart)**

  - Hiển thị danh sách sản phẩm đã chọn, số lượng, thành tiền mỗi dòng và **tổng đơn hàng**.
  - Cho phép chỉnh số lượng (1–99) và xoá sản phẩm khỏi giỏ.

- **Reset bộ lọc**
  - Nút **Refresh** đưa `search` về rỗng và `category` về `ALL`.

---

### 🛠 Tech stack

- **React + TypeScript + Vite**
- **Reactstrap** (UI components, grid, table, form, card,…)
- **Font Awesome** (icon giỏ hàng, xoá, refresh)

---

### 🚀 Demo online

- **Domain**: [`https://vipham999.github.io/product-search-and-order/`](https://vipham999.github.io/product-search-and-order/)

---

### 🖥️ Cách chạy project local

Yêu cầu:

- Node.js (khuyến nghị >= 18)
- npm

Các bước:

```bash
# Cài đặt dependencies
npm install

# Chạy dev server (Vite)
npm run dev
```

Mặc định Vite sẽ chạy ở địa chỉ tương tự như: `http://localhost:5173`.

Build production:

```bash
npm run build
```

Preview bản build:

```bash
npm run preview
```

---

### 🧱 Cấu trúc chính

- **`src/App.tsx`**: Ghép các phần Search, Filter, ProductList, Cart và quản lý state toàn cục (search, category, cart, loading).
- **`src/data/products.ts`**: Danh sách sản phẩm mẫu.
- **`src/helper/helper-functions.ts`**: Hàm `fetchFilteredProducts` mô phỏng API filter với `setTimeout`.
- **`src/components/search-bar`**: Component ô tìm kiếm.
- **`src/components/category-filter`**: Component chọn nhóm sản phẩm.
- **`src/components/product`**: Hiển thị bảng sản phẩm và nút thêm vào giỏ.
- **`src/components/cart`**: Hiển thị giỏ hàng và tính tổng tiền.

---

### 📌 Ghi chú

- Ứng dụng hiện tại sử dụng dữ liệu tĩnh và filter trên client.
