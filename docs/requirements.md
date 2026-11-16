# Air-Canvas AR — Requirements Specification

## 1. Project Overview

Air-Canvas AR is a browser-based interactive application that allows users to draw in the air using hand gestures captured through a webcam.

The application uses computer vision to detect hand movements and body landmarks. Users can create virtual drawings without physically touching the screen. Completed drawings can be converted into physics-based objects that interact with gravity, the environment, and the user's body movements.

The application also provides backend functionality for capturing, storing and sharing snapshots of the interactive canvas.

## 2. Project Objectives

1. Enable users to interact with a digital canvas using natural hand movements.
2. Detect hand landmarks and recognize drawing gestures using computer vision.
3. Convert hand movements into continuous drawing strokes.
4. Transform completed drawings into physics-based objects.
5. Enable virtual objects to interact with tracked body positions.
6. Provide snapshot storage and sharing through backend APIs.
7. Deliver a modular, maintainable and containerized application.

## 3. Project Scope

The initial version will focus on a browser-based 2D interactive experience using webcam input, hand tracking, body tracking, Canvas rendering and physics simulation.

The project will implement the original mentor-assigned requirements before introducing optional visual or interaction enhancements.

## 4. Out of Scope

The initial version will not include:

- Custom machine-learning model training.
- Voice assistant or LLM integration.
- 3D rendering or advanced 3D physics.
- Cloud-based real-time video processing.
- Multi-user real-time collaboration.
- Unnecessary microservices or distributed infrastructure.

These may be considered as future enhancements after the required version is complete.

## 5. Functional Requirements

### FR-01: Camera Access and Video Input

1. The system shall request permission to access the user's webcam.
2. The system shall display the live camera feed in the application.
3. The system shall handle camera access denial and unavailable camera devices.
4. The system shall allow the user to start and stop the camera.

### FR-02: Hand Landmark Detection

1. The system shall detect the user's hand using a pre-trained hand-tracking model.
2. The system shall identify important hand landmarks, including the thumb tip and index fingertip.
3. The system shall track fingertip coordinates continuously while the hand is visible.
4. The system shall handle situations where the hand moves outside the camera frame.

### FR-03: Gesture Recognition

1. The system shall detect the pinch gesture using the distance between the thumb tip and index fingertip.
2. The system shall begin drawing when the required pinch gesture is detected.
3. The system shall stop drawing when the pinch gesture is released.
4. The system shall prevent accidental drawing caused by small and unstable finger movements.

### FR-04: Drawing Engine

1. The system shall convert tracked fingertip coordinates into canvas coordinates.
2. The system shall render continuous strokes based on the user's hand movements.
3. The system shall provide controls for changing brush colour and size.
4. The system shall allow the user to clear the canvas.
5. The system shall maintain the drawing independently of temporary hand-tracking interruptions.

### FR-05: Physics Simulation

1. The system shall convert completed drawing strokes into physics-based objects.
2. The system shall apply gravity to the generated objects.
3. The system shall support collision detection between physics objects.
4. The system shall simulate realistic object movement, bouncing and interactions.
5. The system shall allow the user to interact with generated objects through tracked body movements.

### FR-06: Body Tracking and Interaction

1. The system shall detect relevant body landmarks, including the head, shoulders and arms.
2. The system shall use tracked body positions to create or update collision boundaries.
3. The system shall allow physics objects to collide with these boundaries.
4. The system shall update collision boundaries as the user changes position.
5. The system shall handle temporary body-tracking interruptions.

### FR-07: Snapshot and Backend Integration

1. The system shall allow users to capture a snapshot of the canvas.
2. The frontend shall send the captured snapshot to the backend through a REST API.
3. The backend shall validate and process uploaded snapshot data.
4. The backend shall store the snapshot and its associated metadata.
5. The backend shall generate a unique shareable URL for the saved snapshot.
6. The system shall allow users to retrieve previously saved snapshots using their URLs.

### FR-08: Application Interface

1. The system shall provide a user-friendly interface for accessing drawing and interaction features.
2. The interface shall provide camera status and relevant error messages.
3. The interface shall provide controls for brush colour, brush size, camera and canvas operations.
4. The interface shall display the interactive drawing and physics simulation.

### FR-09: Logging and Diagnostics

1. The frontend shall report relevant camera and model-loading errors.
2. The backend shall maintain structured logs for important application events and errors.
3. The system shall provide sufficient diagnostic information to help identify failures.

### FR-10: Deployment and Documentation

1. The application shall provide Docker configuration for the frontend and backend.
2. Docker Compose shall support running the application components together.
3. The project shall include documentation describing its architecture and setup process.
4. The documentation shall explain the mathematical mapping between canvas coordinates and physics-world coordinates.
5. The documentation shall include instructions for building, pulling and running the Docker images.

## 6. Non-Functional Requirements

### NFR-01: Performance
The application should process camera frames and update the interactive canvas smoothly, with minimal noticeable delay.

### NFR-02: Responsiveness
Hand gestures and body movements should produce timely visual and physical responses.

### NFR-03: Reliability
The application should handle camera failures, missing landmarks, model-loading failures and invalid backend requests without unexpected crashes.

### NFR-04: Maintainability
The frontend and backend should be organized into separate, understandable modules with clear responsibilities.

### NFR-05: Scalability
The backend should use a modular architecture that allows future features and storage improvements without major restructuring.

### NFR-06: Security
The backend should validate incoming data, restrict unsafe file uploads and avoid exposing sensitive configuration or credentials.

### NFR-07: Usability
The application should provide clear controls, understandable status indicators and useful error messages.

### NFR-08: Portability
The application should support development and deployment through documented setup instructions and Docker configuration.

### NFR-09: Privacy
Camera processing should happen locally in the browser. Video frames should not be continuously uploaded to the backend.

### NFR-10: Compatibility
The application should support modern browsers that provide the required camera, graphics and JavaScript capabilities.