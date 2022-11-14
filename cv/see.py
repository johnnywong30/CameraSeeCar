import cv2
import csv
import numpy as np
import time

def drawRectangle(img, thresh_img, a, b, c, d):

    spot_img = thresh_img[b:b + d, a:a + c]
    n = cv2.countNonZero(spot_img)

    if n in range(min, max):
        cv2.rectangle(img, (a, b), (a + c, b + d), (0, 255, 0), 1)
        spots.loc += 1
        return True
    else:
        cv2.rectangle(img, (a, b), (a + c, b + d), (0, 0, 255), 1)
        return False


class spots:
    loc = 0
    open_indices = []

# Get parking spot locations
with open('data/rois.csv', 'r', newline='') as inf:
    csvr = csv.reader(inf)
    rois = list(csvr)

rois = [[int(float(j)) for j in i] for i in rois]

# Get video
VIDEO_SOURCE = "carPark.mp4"
cap = cv2.VideoCapture(VIDEO_SOURCE)
fps = cap.get(cv2.CAP_PROP_FPS)

while True:
    now = time.time()

    # Reset spots per frame
    spots.loc = 0
    spots.open_indices = []

    # Get current frame
    ret, frame = cap.read()

    if not ret:
        break

    # Threshold and dilate the image
    thresh_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    thresh_img = cv2.GaussianBlur(thresh_img, (3, 3), 1)
    thresh_img = cv2.adaptiveThreshold(thresh_img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 25, 16)
    thresh_img = cv2.medianBlur(thresh_img, 5)
    kernel = np.ones((3, 3), np.uint8)
    thresh_img = cv2.dilate(thresh_img, kernel, iterations=1)


    min = 0
    max = 850

    font = cv2.FONT_HERSHEY_SIMPLEX
    for i in range(len(rois)):
        if drawRectangle(frame, thresh_img, rois[i][0], rois[i][1], rois[i][2], rois[i][3]):
            spots.open_indices.append(i)
        cv2.putText(frame, str(i), (rois[i][0]+1, rois[i][1]+15), font, .5, (255,255,255), 1)

    cv2.putText(frame, 'Available spots: ' + str(spots.loc), (10, 30), font, 1, (0, 255, 0), 2)
    cv2.imshow('Detector', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    timeDiff = time.time() - now
    if (timeDiff < 1.0/fps):
        time.sleep(1.0/fps - timeDiff)

cap.release()
cv2.destroyAllWindows()