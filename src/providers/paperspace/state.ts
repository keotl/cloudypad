import { CommonProvisionConfigV1, CommonProvisionOutputV1, InstanceStateV1 } from "../../core/state"

export type PaperspaceInstanceStateV1 = InstanceStateV1<PaperspaceProvisionConfigV1, PaperspaceProvisionOutputV1>

export interface PaperspaceProvisionOutputV1 extends CommonProvisionOutputV1 {
    machineId: string,
}

export interface PaperspaceProvisionConfigV1 extends CommonProvisionConfigV1 {
    apiKey: string
    machineType: string
    diskSize: number
    publicIpType: 'static' | 'dynamic'
    region: string
}

// V0

export interface PaperspaceProviderStateV0 {
    machineId?: string,
    apiKey: string
    provisionArgs?: PaperspaceProvisionArgsV0
}

export interface PaperspaceProvisionArgsV0 {
    useExisting?: {
        machineId: string
        publicIp: string
    }
    apiKey?: string
    create?: {
        machineType: string
        diskSize: number
        publicIpType: 'static' | 'dynamic'
        region: string
    }
}
