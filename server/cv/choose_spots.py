import cv2
import csv

img = cv2.imread("carParkImg.png")

r = cv2.selectROIs('Selector', img, showCrosshair = False, fromCenter = False)

rlist = r.tolist()

with open('data/rois.csv', 'w', newline='') as outf:
  csvw = csv.writer(outf)
  csvw.writerows(rlist)