# SRD v1.0 ‧ 2024-06-09

## 版本歷史
| 版本 | 日期       | 說明     | 編寫人         |
|------|------------|----------|----------------|
| 1.0  | 2024-06-09 | 首版制定 | AI 產品策略顧問 |

---

## 1. 系統架構圖

### C4 Level-1（系統上下文）
```mermaid
C4Context
    title System Context
    Person(user, "用戶")
    System_Boundary(s1,"數位基礎建設應用平台") {
      Container(web, "前端Web", "Next.js", "UI/UX展示、API串接")
      Container(api, "Strapi API", "Node.js", "內容管理與資料API")
      ContainerDb(db, "PostgresDB", "PostgreSQL", "儲存業者、案例、消息等資料")
    }
    user -> web : 瀏覽、互動
    web -> api : 取得內容資料
    api -> db : 讀寫資料
```

### C4 Level-2（容器圖）
```mermaid
C4Container
    title Container Diagram
    Container(web, "前端Web", "Next.js", "UI/UX展示、API串接")
    Container(api, "Strapi API", "Node.js", "內容管理與資料API")
    ContainerDb(db, "PostgresDB", "PostgreSQL", "儲存業者、案例、消息等資料")
    web -> api : RESTful API
    api -> db : ORM/SQL
```

---

## 2. 非功能需求

| 項目         | 指標/說明                                   | 來源BRD條款 |
|--------------|---------------------------------------------|-------------|
| 性能         | 首頁靜態渲染，載入時間 < 2 秒               | 7           |
| 安全         | Cookie 管理，API 僅讀取公開資料             | 7           |
| 可擴展性     | 架構可擴充新頁面與功能                      | 7           |
| 維護性       | 採用模組化元件，易於維護與擴充              | 7           |
| 無障礙       | 遵循 WCAG 2.0 A 級、台灣無障礙規範          | 7           |
| 多語系       | UI 按鈕切換，內容以 Google 翻譯              | 7           |

---

## 3. 介面契約概要
- 前端與 Strapi API 以 RESTful JSON 介接，詳見 API 設計文件
- API 需支援 CORS，僅公開 GET 查詢
- 資料庫結構詳見 ERD 文件

---

## 追溯矩陣
| SRD功能編號 | 來源FRD功能ID | 來源BRD條款 |
|-------------|---------------|-------------|
| S-01        | F-03, F-07, F-08, F-09 | 3.1, 3.2, 7 |

---

## 簽署確認
| 職稱         | 姓名     | 日期       | 簽名   |
|--------------|----------|------------|--------|
| 產品經理     |          |            |        |
| 技術負責人   |          |            |        |
| UI/UX 設計師 |          |            |        | 