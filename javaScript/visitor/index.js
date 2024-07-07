// ScheduleManagementVisitor Interface
class ScheduleManagementVisitor {
  visitDayShift(dayShift) {}
  visitNightShift(nightShift) {}
  visitRemoteWorkShift(remoteWorkShift) {}
}

class CalculateBonusVisitor extends ScheduleManagementVisitor {
  visitDayShift(dayShift) {
    console.log("Calculating bonus for day shift...");
  }
  visitNightShift(nightShift) {
    console.log("Calculating bonus for night shift...");
  }
  visitRemoteWorkShift(remoteWorkShift) {
    console.log("Calculating bonus for remote work shift...");
  }
}

class ManageLeaveRequestsVisitor extends ScheduleManagementVisitor {
  visitDayShift(dayShift) {
    console.log("Managing leave requests for day shift.");
  }
  visitNightShift(nightShift) {
    console.log("Managing leave requests for night shift.");
  }
  visitRemoteWorkShift(remoteWorkShift) {
    console.log("Managing leave requests for remote work shift.");
  }
}

// ScheduleManagement Interface
class ScheduleManagement {
  generateReport() {}
  calculateOverTime() {}
  accept(visitor) {}
}

class DayShiftScheduleManagement extends ScheduleManagement {
  generateReport() {
    console.log("Generating report for day shift...");
  }
  calculateOverTime() {
    console.log("Calculating over time for day shift...");
  }
  accept(visitor) {
    visitor.visitDayShift(this);
  }
}

class NightShiftScheduleManagement extends ScheduleManagement {
  generateReport() {
    console.log("Generating report for night shift...");
  }
  calculateOverTime() {
    console.log("Calculating over time for night shift...");
  }
  accept(visitor) {
    visitor.visitNightShift(this);
  }
}

class RemoteWorkShiftScheduleManagement extends ScheduleManagement {
  generateReport() {
    console.log("Generating report for remote work shift...");
  }
  calculateOverTime() {
    console.log("Calculating over time for remote work shift...");
  }
  accept(visitor) {
    visitor.visitRemoteWorkShift(this);
  }
}

const dayShift = new DayShiftScheduleManagement();
const nightShift = new NightShiftScheduleManagement();
const remoteWorkShift = new RemoteWorkShiftScheduleManagement();

const calculateBonusVisitor = new CalculateBonusVisitor();
const manageLeaveRequestsVisitor = new ManageLeaveRequestsVisitor();

dayShift.accept(calculateBonusVisitor);
nightShift.accept(calculateBonusVisitor);
remoteWorkShift.accept(calculateBonusVisitor);

dayShift.accept(manageLeaveRequestsVisitor);
nightShift.accept(manageLeaveRequestsVisitor);
remoteWorkShift.accept(manageLeaveRequestsVisitor);

//OUTPUT
// Calculating bonus for day shift...
// Calculating bonus for night shift...
// Calculating bonus for remote work shift...
// Managing leave requests for day shift.
// Managing leave requests for night shift.
// Managing leave requests for remote work shift.
