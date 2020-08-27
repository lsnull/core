package com.dotcms.concurrent.scheduler;

import com.dotmarketing.util.Config;
import com.dotmarketing.util.UUIDGenerator;

import java.io.Serializable;
import java.time.Duration;

/**
 * DotTask is a single task (Not recurring, for it see @{@link DotRecurringTask}), the task could has or not an initial delay.
 * The instanceId must be unique and it will be the reference next operations
 *
 * @author jsanca
 * @param <T>
 */
public class DotTask<T extends Runnable & Serializable> implements Serializable {

    private final T        runnable;
    private final String   instanceId;
    private final Duration initialDelay;
    private final String   suffix;

    public DotTask(final T runnable, final String instanceId) {
        this(
                runnable,
                instanceId,
                Duration.ofMillis(
                        Config.getIntProperty(
                                "DOTSCHEDULER_DELAY_SECONDS",
                                15)));
    }

    public DotTask(final T runnable, final String instanceId, final Duration initialDelay) {
        this.runnable = runnable;
        this.instanceId = instanceId;
        this.suffix = UUIDGenerator.shorty();
        this.initialDelay = initialDelay;
    }

    public T getRunnable() {
        return runnable;
    }

    public String getInstanceId() {
        return instanceId;
    }

    public Duration getInitialDelay() {
        return initialDelay;
    }

    public String getSuffix() {
        return suffix;
    }

    public String getFullInstanceId() {
        return instanceId + "_" + suffix;
    }

}
