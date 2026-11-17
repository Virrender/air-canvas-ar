## Technology Stack

The project uses the following technologies:

| Layer | Technology | Purpose |
|:---|:---|:---|
| **Frontend** | React + TypeScript + Vite | Application UI and frontend structure |
| **Camera** | Browser `getUserMedia()` | Access webcam |
| **Computer Vision** | MediaPipe | Hand and body landmark detection |
| **Drawing** | HTML Canvas API | Render finger movements as strokes |
| **Physics** | Matter.js | Gravity, collisions, and rigid bodies |
| **Backend** | Python + FastAPI | REST APIs and snapshot management |
| **Validation** | Pydantic | Validate API request and response data |
| **Database** | PostgreSQL *(planned)* | Store snapshot metadata |
| **ORM** | SQLAlchemy *(planned)* | Work with database records |
| **Version Control** | Git + GitHub | Track and share changes |
| **Containerization** | Docker + Compose | Package and run the application |