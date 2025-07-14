# API 設計文件 v1.0 ‧ 2024-06-09

## 版本歷史
| 版本 | 日期       | 說明     | 編寫人         |
|------|------------|----------|----------------|
| 1.0  | 2024-06-09 | 首版制定 | AI 產品策略顧問 |

---

```yaml
openapi: 3.1.0
info:
  title: 數位基礎建設應用平台 API
  version: 1.0.0
  description: |
    提供最新消息、業者地圖、實證案例等資料查詢
servers:
  - url: https://api.dginfra.gov.tw
paths:
  /news:
    get:
      summary: 取得最新消息列表
      responses:
        '200':
          description: 成功
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/News'
      x-curl-example: |
        curl -X GET "https://api.dginfra.gov.tw/news"
  /vendors:
    get:
      summary: 取得業者地圖列表
      parameters:
        - in: query
          name: keyword
          schema: { type: string }
          description: 關鍵字搜尋
        - in: query
          name: year
          schema: { type: string }
          description: 年度篩選
        - in: query
          name: tool
          schema: { type: string }
          description: 工具類型
        - in: query
          name: category
          schema: { type: string }
          description: 應用類別
        - in: query
          name: industry
          schema: { type: string }
          description: 產業別
      responses:
        '200':
          description: 成功
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Vendor'
      x-curl-example: |
        curl -X GET "https://api.dginfra.gov.tw/vendors?keyword=AI&year=2024"
  /cases:
    get:
      summary: 取得數位實證案例列表
      responses:
        '200':
          description: 成功
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Case'
      x-curl-example: |
        curl -X GET "https://api.dginfra.gov.tw/cases"
components:
  schemas:
    News:
      type: object
      properties:
        id: { type: string }
        title: { type: string }
        shortDesc: { type: string }
        content: { type: string }
        publishedAt: { type: string, format: date-time }
    Vendor:
      type: object
      properties:
        id: { type: string }
        name: { type: string }
        year: { type: string }
        tool: { type: string }
        category: { type: string }
        industry: { type: string }
        description: { type: string }
        image: { type: string, format: uri }
        link: { type: string, format: uri }
    Case:
      type: object
      properties:
        id: { type: string }
        title: { type: string }
        description: { type: string }
        image: { type: string, format: uri }
        link: { type: string, format: uri }
```

---

## 追溯矩陣
| API端點 | 來源SRD功能ID |
|---------|---------------|
| /news   | S-01          |
| /vendors| S-01          |
| /cases  | S-01          |

---

## 簽署確認
| 職稱         | 姓名     | 日期       | 簽名   |
|--------------|----------|------------|--------|
| 產品經理     |          |            |        |
| 技術負責人   |          |            |        |
| UI/UX 設計師 |          |            |        | 