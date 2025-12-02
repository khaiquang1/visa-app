# UI Spec – Visa Application Form (giống myvietnamvisa.com)

## Page: Application Form

### Header
- Logo / Brand name / Title trang
- (Optional) Navigation bar: Home | Services | Contact | …

### Main Form Container
- Title: “Vietnam E-Visa Application Form” (hoặc tương tự)
- Subtitle / Description (nếu cần)

### Form Fields

| Label / Field name | Type / Info |
|------------------|-------------|
| Number of applicants | Select / Dropdown (1, 2, 3, …) |
| Type of visa | Select / Dropdown (e.g. “1 Month Single Entry (Tourism)”, “3 Month Single Entry”, etc.) |
| Intended entry port | Text input or Dropdown (tùy thiết kế) |
| Processing Time | Select / Dropdown (e.g. Standard 5-7 working days, Urgent 2 working days, Same Day, …) |
| Contact Info (Name, Email, Phone) | Text inputs |
| Passport Info (Passport number, Date of birth, Nationality, etc.) | Text inputs / Date pickers / Dropdowns |
| Travel Info (Entry date, Exit date, Arrival port, etc.) | Date picker / Text / Dropdown |
| Additional options (if any) | Checkbox / Radio / Select |
| Submit Button | “Submit Application” / “Apply Visa” |

### Footer / Notices / Info Section
- Section chứa thông báo / FAQ / Terms & Conditions / Privacy / Notes  
- Có thể thêm logo payment / secure payment info  

### Layout & Structure
- Responsive: desktop + mobile  
- Form nằm chính giữa, khoảng cách hợp lý giữa các field  
- Có phân nhóm thông tin: Applicant Info, Passport & Travel Info, Visa Options, Contact Info  

---

## File / Component structure (gợi ý React + Vite)

- `src/`
  - `App.jsx` — Main app container  
  - `components/`
    - `Header.jsx` — Header / Navbar  
    - `VisaForm.jsx` — Component chính chứa form  
    - `FormField.jsx` — Reusable field component (input/select/checkbox)  
    - `Footer.jsx` — Footer / Notices / Info  
  - `styles/` (nếu dùng CSS Modules / SCSS / Tailwind)  
  - `assets/` — ảnh / icon / logo / background  
