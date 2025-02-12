import { SegmentationItem } from '~/domain/models/tasks/segmentation'

export class SegmentationDTO {
  id: number
  uuid: string
  label: number
  points: number[]

  constructor(item: SegmentationItem) {
    this.id = item.id
    this.uuid = item.uuid
    this.label = item.label
    this.points = item.points
  }
}
