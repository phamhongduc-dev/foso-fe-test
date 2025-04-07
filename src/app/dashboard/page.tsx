import { Fragment } from 'react'

import Widgets from './_components/widgets/widgets'
import TopCustomersChart from './_components/charts/top-customers-chart'
import MaterialNeedsChart from './_components/charts/material-needs-chart'
import ProductionPlanChart from './_components/charts/production-plan-chart'
import ProductionStatusChart from './_components/charts/production-status-chart'
import ProductionProgressByGroup from './_components/charts/production-progress-by-group-chart'

export default function DashboardPage() {
  return (
    <Fragment>
      <Widgets />
      <div className='flex items-center gap-6 self-stretch px-12'>
        <ProductionPlanChart />
        <TopCustomersChart />
      </div>
      <div className='flex items-stretch justify-center gap-6 self-stretch px-12'>
        <ProductionStatusChart />
        <ProductionProgressByGroup />
        <MaterialNeedsChart />
      </div>
    </Fragment>
  )
}
